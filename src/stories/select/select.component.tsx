import {
  FormControl,
  Input,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { useStyles } from "./select.styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import clsx from "clsx";

export interface SelectOption {
  label: string | React.ReactNode;
  value: string;
}

export interface DSSelectProps extends Omit<SelectProps, "value" | "onChange"> {
  options: SelectOption[];
  placeholder: string;
  startAdornment?: React.ReactNode;
  error?: boolean;
  helperText?: string;
  selectedValue: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}

export function DSSelect({
  options,
  placeholder,
  startAdornment,
  error,
  helperText,
  selectedValue,
  onChange,
  ...restSelectProps
}: DSSelectProps) {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const onToggleVisibility = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <FormControl
      variant="standard"
      fullWidth
      className={classes.selectContainer}
    >
      <Select
        data-testid="ds-select"
        className={classes.select}
        value={selectedValue}
        onOpen={onToggleVisibility}
        onClose={onToggleVisibility}
        displayEmpty
        error={error}
        MenuProps={{
          classes: {
            paper: classes.paper,
            list: classes.list,
          },
        }}
        IconComponent={(values) => (
          <KeyboardArrowDownIcon
            {...values}
            className={clsx(classes.icon, {
              [classes.iconOnOpen]: isOpen,
              [classes.selectIconOnOpen]: isOpen,
              [classes.iconOnError]: error,
            })}
          />
        )}
        renderValue={(value) => {
          if (value === "") {
            return (
              <Typography component="span" className={classes.placeholder}>
                {placeholder || "Selecione uma opção"}
              </Typography>
            );
          }
          return options.find((option) => option.value === value)?.label;
        }}
        onChange={onChange}
        input={
          <Input
            {...(startAdornment && {
              startAdornment: (
                <InputAdornment
                  position="start"
                  className={clsx(classes.icon, {
                    [classes.iconOnOpen]: isOpen,
                    [classes.iconOnError]: error,
                  })}
                >
                  {startAdornment}
                </InputAdornment>
              ),
            })}
            {...restSelectProps}
          />
        }
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            className={clsx(classes.selectOption, {
              [classes.withInputIcon]: startAdornment,
            })}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && helperText && (
        <Typography className={classes.helperText}>{helperText}</Typography>
      )}
    </FormControl>
  );
}

export default DSSelect;
