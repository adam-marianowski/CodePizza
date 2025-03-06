import type { JSX, ReactNode } from "react";

type WithChildren = { children: ReactNode };

type PageContentProps = WithChildren;

type PageTitleProps = { title: string };

type PageProps = { className: string } & WithChildren;

type PageButtonProps = {
  className: string;
  onClick: () => void;
  title: ReactNode;
};

export default function Page(props: PageProps): JSX.Element {
  return <div className={props.className}>{props.children}</div>;
}

Page.Button = function Button(props: PageButtonProps): JSX.Element {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

Page.Title = function Title(props: PageTitleProps): JSX.Element {
  return <h1>{props.title}</h1>;
};

Page.Heading = function Heading(props: WithChildren): JSX.Element {
  return <div className="page-heading">{props.children}</div>;
};

Page.Content = function Content(props: PageContentProps): JSX.Element {
  return <div className="page-content">{props.children}</div>;
};
