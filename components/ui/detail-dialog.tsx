'use client'

import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogTitle,
  MorphingDialogDescription,
} from '@/components/ui/morphing-dialog'

type DetailItem = {
  label: string
  value: string
}

type DetailDialogProps = {
  title: string
  eyebrow: string
  description: string
  details: DetailItem[]
  bulletLabel?: string
  bulletItems?: string[]
  linkLabel?: string
  linkHref?: string
  children: React.ReactNode
}

export function DetailDialog({
  title,
  eyebrow,
  description,
  details,
  bulletLabel,
  bulletItems,
  linkLabel,
  linkHref,
  children,
}: DetailDialogProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger className="cursor-pointer">
        {children}
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative w-[min(92vw,36rem)] rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-zinc-200/70 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/70">
          <div className="space-y-5">
            <div className="space-y-1 pr-10">
              <MorphingDialogDescription className="text-sm text-zinc-500 dark:text-zinc-400">
                {eyebrow}
              </MorphingDialogDescription>
              <MorphingDialogTitle className="text-xl font-medium text-zinc-950 dark:text-zinc-50">
                {title}
              </MorphingDialogTitle>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            </div>

            <div className="space-y-3">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start justify-between gap-4 border-b border-zinc-200 pb-2 last:border-b-0 last:pb-0 dark:border-zinc-800"
                >
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {detail.label}
                  </span>
                  <span className="text-right text-sm text-zinc-900 dark:text-zinc-100">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            {bulletItems && bulletItems.length > 0 ? (
              <div className="space-y-3 rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-900/50">
                {bulletLabel ? (
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {bulletLabel}
                  </p>
                ) : null}
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {bulletItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {linkHref ? (
              <a
                href={linkHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-zinc-950 px-4 py-2 text-sm text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                {linkLabel ?? 'Open link'}
              </a>
            ) : null}
          </div>
          <MorphingDialogClose
            className="absolute top-4 right-4 rounded-full bg-zinc-100 p-2 text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.1, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <XIcon className="h-4 w-4" />
          </MorphingDialogClose>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}