//在Flexbox布局中创建一个不可见但占据空间的占位元素
//props解构赋值+typescript类型注释
export const FlexboxSpacer = ({
    maxWidth,
    minWidth = 0,
    className = "",
  }: {
    maxWidth: number;
    minWidth?: number;
    className?: string;
  }) => {
    return (
      <div
        className={`invisible shrink-[10000] grow ${className}`}
        style={{ maxWidth: `${maxWidth}px`, minWidth: `${minWidth}px` }}
      />
    );
  };

  //不使用ts类型注释
//   export const FlexboxSpacer = ({
//     maxWidth,
//     minWidth = 0,
//     className = "",
//   }) => {
//     return (
//       <div
//         className={`invisible shrink-[10000] grow ${className}`}
//         style={{ maxWidth: `${maxWidth}px`, minWidth: `${minWidth}px` }}
//       />
//     );
//   };