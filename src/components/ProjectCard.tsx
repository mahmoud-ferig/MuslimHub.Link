import type { FC } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ title, description, href }) => {
  return (
    <article className="flex h-full flex-col rounded-xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-gray-700">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${title} on GitHub`}
        className="mt-4 inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
      >
        View on GitHub
      </a>
    </article>
  );
};

export default ProjectCard;
