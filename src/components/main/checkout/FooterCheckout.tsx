import React from 'react';
import { classNames } from '@/helpers';
import { Button, Icon } from '@/components/commons';

export type props = {
  className?: string;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const FooterCheckout: React.FC<props> = ({
  className,
  currentStep,
  setCurrentStep,
}) => {
  return (
    <div className={classNames('flex items-center justify-between', className)}>
      {currentStep !== 1 && (
        <Button
          weight="inline"
          iconLeft={<Icon name="arrow-left" />}
          size="large"
          onClick={() => setCurrentStep((prv) => prv - 1)}
        >
          <p className="font-extrabold">Go back</p>
        </Button>
      )}
      {currentStep !== 4 && (
        <Button  onClick={() => setCurrentStep((prv) => prv + 1)} size="large">
          <p className="font-extrabold w-32">Next</p>
        </Button>
      )}
    </div>
  );
};

export default FooterCheckout;
