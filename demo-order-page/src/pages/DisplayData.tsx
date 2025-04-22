import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import clsx from "clsx"  // For cleaner conditional classes
  
  type FormData = {
    firstName: string
    lastName: string
    email: string
    phone: string
    region: string
    segment: string
    clientName: string
    orderSheet1: string
    orderSheet2: string
    notes: string
  }
  
  interface DisplayDataProps {
    formData: FormData[]
  }
  
  export function DisplayData({ formData = [] }: DisplayDataProps) {
    return (
      <Table>
        <TableCaption>A list of your form submissions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left px-4">Client Name</TableHead>
            <TableHead className="text-left px-4">Market Segment</TableHead>
            <TableHead className="text-left px-4">Region</TableHead>
            <TableHead className="text-left px-4">Last Name</TableHead>
            <TableHead className="text-left px-4">First Name</TableHead>
            <TableHead className="text-left px-4">Phone</TableHead>
            <TableHead className="text-left px-4">Order Sheet 1</TableHead>
            <TableHead className="text-left px-4">Order Sheet 2</TableHead>
            <TableHead className="text-left px-4">Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {formData.map((entry, index) => (
            <TableRow
              key={index}
              className={clsx(index % 2 === 0 ? "bg-white" : "bg-gray-50")}
            >
              <TableCell className="text-left px-4">{entry.clientName}</TableCell>
              <TableCell className="text-left px-4">{entry.segment}</TableCell>
              <TableCell className="text-left px-4">{entry.region}</TableCell>
              <TableCell className="text-left px-4">{entry.lastName}</TableCell>
              <TableCell className="text-left px-4">{entry.firstName}</TableCell>
              <TableCell className="text-left px-4">{entry.phone}</TableCell>
              <TableCell className="text-left px-4">{entry.orderSheet1}</TableCell>
              <TableCell className="text-left px-4">{entry.orderSheet2}</TableCell>
              <TableCell className="text-left px-4">{entry.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={9} className="text-left px-4">
              Total Entries: {formData.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  