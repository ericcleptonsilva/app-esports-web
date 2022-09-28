import * as Select from "@radix-ui/react-select";
import {Check, CaretDown,CaretUp } from "phosphor-react";
import { Game } from "../types/Games";

interface SelectedProps {
  value?: any;
  onChange: (value: any) => void;
  data: Game[]
}
export const SelectedCustom = (props:SelectedProps) => {
  return (
    <div>
      <Select.Root onValueChange={props.onChange} >
        <Select.SelectTrigger
          aria-label="Food"
          className=" text-zinc-500 inline-flex items-center justify-between bg-zinc-900 text-sm px-3 py-2 w-full shadow-inner shadow-black/25"
        >
          <Select.Value placeholder="Selecione seu game que deseja jogar" />
          <Select.SelectIcon>
            <CaretDown size={14} color="white" />
          </Select.SelectIcon>
        </Select.SelectTrigger>

        <Select.Portal>
          <Select.Content className="overflow-hidden bg-zinc-900 border-r-2 shadow-inner">
            <Select.ScrollUpButton>
              <CaretUp size={14} />
            </Select.ScrollUpButton>
            <Select.Viewport >
              <Select.Group   >
                <Select.Label className="text-lg text-white font-inter text-center  mt-2">Games</Select.Label>
                {props.data.map(e => {
                  return (
                    <Select.Item
                    key={e.id}
                    value={e.title}                                     
                    className="text-sm text-white font-inter flex items-center relative py-2 px-6 w-full h-full select-none "
                  >
                    <Select.ItemText  key={e.id} className="">{e.title}</Select.ItemText>
                    <Select.ItemIndicator>
                      <Check size={14} />
                    </Select.ItemIndicator>
                  </Select.Item>
                  )
                })}
               
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex justify-center items-center h-6 cursor-default">
              <CaretDown size={14} />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};
