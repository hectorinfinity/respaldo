import { classNames } from '@/helpers';
type Props = {
  className?: string;
  error?: any;
};

export const CustomError = ({ className, error }: Props) => {
  return (
    <p className={classNames('py-1 text-sm text-customRed', className)}>
      {error}
    </p>
  );
};
