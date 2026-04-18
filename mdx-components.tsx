import type { MDXComponents } from 'mdx/types'

const baseComponents: MDXComponents = {
  h1: (props) => <h1 className="mt-12 text-4xl font-semibold tracking-tight" {...props} />,
  h2: (props) => <h2 className="mt-14 border-t border-black/10 pt-8 text-2xl font-semibold tracking-tight" {...props} />,
  h3: (props) => <h3 className="mt-10 text-xl font-semibold tracking-tight" {...props} />,
  p: (props) => <p className="mt-5 text-[15px] leading-8 text-black/80" {...props} />,
  ul: (props) => <ul className="mt-5 list-disc space-y-2 pl-6 text-[15px] leading-8 text-black/80" {...props} />,
  ol: (props) => <ol className="mt-5 list-decimal space-y-2 pl-6 text-[15px] leading-8 text-black/80" {...props} />,
  li: (props) => <li className="pl-1" {...props} />,
  strong: (props) => <strong className="font-semibold text-black" {...props} />,
  em: (props) => <em className="italic" {...props} />,
  blockquote: (props) => (
    <blockquote className="mt-6 border-l-2 border-black pl-4 text-lg leading-8 text-black/75" {...props} />
  ),
  hr: (props) => <hr className="my-12 border-black/10" {...props} />,
  a: (props) => (
    <a
      className="underline underline-offset-4 transition-opacity hover:opacity-60"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noreferrer' : undefined}
      {...props}
    />
  ),
  code: (props) => (
    <code className="rounded bg-black/5 px-1.5 py-0.5 text-[0.95em] text-black" {...props} />
  ),
  pre: (props) => (
    <pre className="mt-6 overflow-x-auto rounded-2xl bg-black px-4 py-4 text-sm text-white" {...props} />
  ),
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...baseComponents,
    ...components,
  }
}
