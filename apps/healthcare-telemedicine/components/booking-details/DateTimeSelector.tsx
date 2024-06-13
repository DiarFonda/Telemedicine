import {
  Calendar,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Button,
} from '@diar/donda';
import { SelectValue } from '@radix-ui/react-select';
import { useMemo, useState } from 'react';

export const DateTimeSelector = ({ companySlug }: { companySlug: String }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const formattedDate = selectedDate?.toLocaleDateString('en-UK', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });

  const [selectedValue, setSelectedValue] = useState('');

  const selectedDateTime = useMemo(() => {
    return `${String(formattedDate)} ${selectedValue}`;
  }, [selectedValue, formattedDate]);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <Card className="p-4 ">
      <CardHeader className="flex justify-between pb-4">
        <CardTitle>Choose Date And Time</CardTitle>
        <CardDescription>
          Book at anytime with Donda Telemedicine
        </CardDescription>
      </CardHeader>
      <CardContent className="flex">
        <div className="flex-grow mr-4">
          <h3 className="mb-2">Select a Date</h3>
          <Calendar
            mode="single"
            className="rounded-md border"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
        <div>
          <h3 className="mb-2">Select Time</h3>
          <Select onValueChange={(value) => handleSelect(value)}>
            <SelectTrigger className="truncate w-[100px]">
              <SelectValue placeholder={'Select'} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="9-10">9-10</SelectItem>
              <SelectItem value="10-11">10-11</SelectItem>
              <SelectItem value="11-12">11-12</SelectItem>
              <SelectItem value="12-13">12-13</SelectItem>
              <SelectItem value="13-14">13-14</SelectItem>
              <SelectItem value="14-15">14-15</SelectItem>
              <SelectItem value="15-16">15-16</SelectItem>
              <SelectItem value="16-17">16-17</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="w-80%">
        <Button
          variant="default"
          size="lg"
          className="w-full mr-5"
          disabled={!selectedValue}
        >
          Submit
        </Button>
        {selectedValue ? <span>Selected Date: {selectedDateTime}</span> : null}
      </CardFooter>
    </Card>
  );
};

export default DateTimeSelector;
