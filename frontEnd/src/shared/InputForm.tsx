import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

type InputProps = {
  name: string;
  description?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function InputForm({
  name,
  placeholder,
  description,
  label,
  type,
  accept,
  onChange,
}: InputProps) {
  const methods = useFormContext();

  return (
    <FormField
      control={methods.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={type}
              accept={accept}
              onChange={(e) => {
                field.onChange(e); // important: keep RHF in sync
                onChange?.(e); // optional: call your custom handler
              }}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default InputForm;
