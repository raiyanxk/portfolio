'use client'

import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

type ProjectDialogProps = {
  title: string
  description: string
  video: string
  technologies: string[]
  linkLabel?: string
  linkHref?: string
  children: React.ReactNode
}

function TechChips({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-full bg-zinc-200/60 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
        >
          {technology}
        </span>
      ))}
    </div>
  )
}

export function ProjectDialog({
  title,
  description,
  video,
  technologies,
  linkLabel,
  linkHref,
  children,
}: ProjectDialogProps) {
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
        <MorphingDialogContent className="relative w-[min(92vw,48rem)] rounded-3xl bg-white p-5 shadow-2xl ring-1 ring-zinc-200/70 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/70">
          <div className="space-y-5">
            <div className="space-y-4 pr-10">
              <div className="space-y-1">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Project
                </p>
                <h3 className="text-xl font-medium text-zinc-950 dark:text-zinc-50">
                  {title}
                </h3>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {description}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/60 ring-inset dark:bg-zinc-900/60 dark:ring-zinc-800/60">
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="aspect-video h-auto w-full rounded-xl"
              />
            </div>

            {technologies.length > 0 ? (
              <div className="space-y-3 rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-900/50">
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Technologies
                </p>
                <TechChips technologies={technologies} />
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