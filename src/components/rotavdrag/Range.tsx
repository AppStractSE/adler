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
    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-24">
      <div className="flex basis-8/12 flex-col gap-2">
        <h6 className="text-lg font-medium tracking-wide md:text-xl">
          {title}
        </h6>
        <p className="text-xs opacity-60 md:text-sm">{description}</p>
        <p className="mt-2 w-1/2 border-b pb-2 text-2xl md:mt-4 md:w-full md:text-4xl">
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
        className="range-lg thumb-slider h-4 w-full cursor-pointer appearance-none rounded-full border border-gray-400 -mr-0.5"
        style={{
          background: `linear-gradient(to right, #7c2d12 0%, #f97316 ${
            (value / max) * 99.5
          }%, rgba(0,0,0,.05) ${(value / max) * 100}%, rgba(0,0,0,.05) 100%)`,
        }}
      />
    </div>
  );
};

export default Range;
