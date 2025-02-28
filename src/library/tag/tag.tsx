import { TagProps } from '@/components/basic/tag/models';

const Tag = ({ label, className }: TagProps) => {
  return (
    <span className={`bg-surface-2 px-2 py-[2px] text-xs rounded-[2px] ${className}`}>{label}</span>
  );
};

export default Tag;
