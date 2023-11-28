import '../stories/Button';

interface MyButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  handleClick?: (e: any) => void;
}

export default function MyButton({
  primary = false,
  backgroundColor,
  size = 'medium',
  label = 'ボタン',
  handleClick,
  ...props
}: MyButtonProps) {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' ',
      )}
      onClick={handleClick}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
}
