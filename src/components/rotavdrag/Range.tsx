interface Props {
  title: string;
  description: string;
  min: number;
  max: number;
  step: number;
  value: number;
  suffix: string;
  setValue: (value: number) => void;
}

const Range = ({
  title,
  description,
  min,
  max,
  step,
  value,
  setValue,
  suffix,
}: Props) => {
  return (
    <div className="flex flex-col lg:items-center justify-between gap-8 lg:flex-row lg:gap-24">
      <div className="flex basis-8/12 flex-col gap-2">
        <h6 className="text-lg font-medium tracking-wide md:text-xl">
          {title}
        </h6>
        <p className="text-xs opacity-60 md:text-sm">{description}</p>
        <p className="mt-2 md:mt-4 w-1/2 border-b pb-2 text-2xl md:w-full md:text-4xl">
          {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} {suffix}
        </p>
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="range-lg h-4 w-full cursor-pointer appearance-none border border-gray-400 rounded-full thumb-slider"
        style={{
          background: `linear-gradient(to right, #1e6c89 0%, #4bbecf ${
            (value / max) * 97.5
          }%, rgba(0,0,0,.05) ${(value / max) * 100}%, rgba(0,0,0,.05) 100%)`,
        }}
      />
    </div>
  );
};

export default Range;
