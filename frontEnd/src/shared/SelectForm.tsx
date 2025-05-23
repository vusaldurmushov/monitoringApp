import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type { SelectHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

type TOption = {
  value: string;
  label: string;
};

type TSelect = {
  name: string;
  description?: string;
  label?: string;
  options: TOption[];
  placeholder:string;
  defaultValue?: string;
  
} & SelectHTMLAttributes<HTMLSelectElement>;

function SelectForm({ name, label, description, options, className,placeholder }: TSelect) {


  const methods = useFormContext();

  return (
    <FormField
      control={methods.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select  onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger className={className}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default SelectForm;
