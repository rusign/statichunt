import Image from "next/future/image";
import Link from "next/link";
import ToolsIcon from "./ToolsIcon";

const Themes = ({ themes, tools }) => {
  return (
    <div className="row">
      {themes.map((theme, i) => (
        <div
          className="col-12 mb-8 sm:col-6 md:col-4 lg:col-6 xl:col-4 2xl:col-3"
          key={`theme-${i}`}
        >
          <div className="theme-card">
            <Link href={`/themes/${theme.slug}`}>
              <a className="img-cover">
                <Image
                  src={`/themes/${theme.slug}.png`}
                  height={250}
                  width={300}
                  alt={theme.frontmatter.title}
                  className="rounded-t"
                />
              </a>
            </Link>
            <div className="theme-card-body">
              <div className="flex justify-between">
                <h2 className="h6 mb-0 text-lg font-medium">
                  <Link href={`/themes/${theme.slug}`}>
                    <a className="hover:underline">{theme.frontmatter.title}</a>
                  </Link>
                </h2>
                <span
                  className="has-tooltip mt-1 whitespace-nowrap text-sm text-text-dark"
                  title="Github Stars"
                >
                  <Image
                    className="mr-1 inline align-text-bottom"
                    src="/images/icons/star.svg"
                    alt="github star"
                    height="16"
                    width="16"
                  />
                  {theme.frontmatter.github_star < 1000
                    ? theme.frontmatter.github_star
                    : parseFloat(theme.frontmatter.github_star / 1000).toFixed(
                        1
                      ) + "k"}
                </span>
              </div>
              <span className="text-xs text-text-dark">
                by{" "}
                {theme.frontmatter.author
                  ? theme.frontmatter.author
                  : theme.frontmatter.github.match(
                      /github\.com\/([^\/]+)/,
                      ""
                    )[0]}
              </span>
              <div className="mt-5 flex items-center">
                <ToolsIcon tools={tools} type={theme.frontmatter.ssg} />
                <ToolsIcon tools={tools} type={theme.frontmatter.cms} />
                <ToolsIcon tools={tools} type={theme.frontmatter.css} />
                <ToolsIcon tools={tools} type={theme.frontmatter.archetype} />
              </div>
            </div>
            <div className="theme-card-footer">
              <strong className="text-text-dark">Free</strong>
              <div className="ml-auto space-x-2">
                <Link href={`/demo/${theme.slug}`}>
                  <a
                    target="_blank"
                    className="btn btn-sm btn-demo"
                    rel="noopener nofollow"
                    title={`Preview ${theme.frontmatter.title}`}
                  >
                    Preview
                  </a>
                </Link>
                <Link href={`${theme.frontmatter.github}?ref=statichunt.com`}>
                  <a
                    className="btn btn-sm btn-download"
                    target="_blank"
                    rel="noopener nofollow"
                    title={`Download ${theme.frontmatter.title}`}
                  >
                    Get
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Themes;
