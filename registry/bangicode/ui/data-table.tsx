"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
  type VisibilityState,
  type RowData,
} from "@tanstack/react-table";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/bangicode/ui/button";
import { Input } from "@/registry/bangicode/ui/input";

// ─── Table primitives ─────────────────────────────────────────────────────────

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("border-b border-border", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-border transition-colors",
      "hover:bg-muted",
      "data-[state=selected]:bg-muted",
      className,
    )}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-4 text-left align-middle",
      "font-montserrat text-[13px] font-medium uppercase tracking-wider text-muted-foreground",
      "[&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "px-4 py-3 align-middle font-hanken-grotesk text-sm",
      "[&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 font-hanken-grotesk text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

// ─── Numeric cell helper ──────────────────────────────────────────────────────

// Wrap a cell value in this to apply JetBrains Mono + right-align + tabular-nums
const NumericCell = ({ value, className }: { value: React.ReactNode; className?: string }) => (
  <span className={cn("font-jetbrains-mono tabular-nums", className)}>{value}</span>
);

// ─── Sortable column header ───────────────────────────────────────────────────

function SortableHeader({
  column,
  children,
}: {
  column: { getIsSorted: () => false | "asc" | "desc"; toggleSorting: (desc?: boolean) => void };
  children: React.ReactNode;
}) {
  const sorted = column.getIsSorted();
  return (
    <button
      className="flex items-center gap-1 font-montserrat text-[13px] font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
      onClick={() => column.toggleSorting(sorted === "asc")}
    >
      {children}
      {sorted === "asc" ? (
        <ArrowUp className="h-3.5 w-3.5 text-accent" />
      ) : sorted === "desc" ? (
        <ArrowDown className="h-3.5 w-3.5 text-accent" />
      ) : (
        <ArrowUpDown className="h-3.5 w-3.5 opacity-40" />
      )}
    </button>
  );
}

// ─── DataTable ────────────────────────────────────────────────────────────────

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
  /** Column id to filter on (shows a search input above the table) */
  filterColumn?: string;
  filterPlaceholder?: string;
  /** Number of rows per page (default 10) */
  pageSize?: number;
  caption?: string;
  className?: string;
}

function DataTable<TData extends RowData>({
  columns,
  data,
  filterColumn,
  filterPlaceholder = "Filter…",
  pageSize = 10,
  caption,
  className,
}: DataTableProps<TData>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    initialState: { pagination: { pageSize } },
    state: { sorting, columnFilters, columnVisibility },
  });

  return (
    <div className={cn("space-y-4", className)}>
      {filterColumn && (
        <Input
          aria-label={filterPlaceholder}
          placeholder={filterPlaceholder}
          value={(table.getColumn(filterColumn)?.getFilterValue() as string) ?? ""}
          onChange={(e) =>
            table.getColumn(filterColumn)?.setFilterValue(e.target.value)
          }
          className="max-w-sm"
        />
      )}

      <div className="rounded-sm border border-border">
        <Table>
          {caption && <TableCaption>{caption}</TableCaption>}
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination row */}
      <div className="flex items-center justify-between gap-2">
        <p className="font-hanken-grotesk text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} row
          {table.getFilteredRowModel().rows.length !== 1 ? "s" : ""}
        </p>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <span className="font-jetbrains-mono px-2 text-xs tabular-nums text-muted-foreground">
            {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export {
  DataTable,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  NumericCell,
  SortableHeader,
  type DataTableProps,
  type ColumnDef,
};
