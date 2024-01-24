import { Card, Skeleton } from "element-plus-react";
import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";
import "./changelog.scss";

const md = new MarkdownIt();

interface Release {
  id: number;
  name: string;
  body: string;
  author: {
    login: string;
  };
  published_at: string;
  html_url: string;
}

const Changelog = () => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(releases);
  useEffect(() => {
    const getList = async () => {
      try {
        const result = await fetch(
          "https://api.github.com/repos/element-plus-react/element-plus-react/releases",
        ).then((res) => res.json());
        console.log(result);
        setReleases(result);
      } catch {
      } finally {
        setLoading(false);
      }
    };
    getList();
  }, []);
  return (
    <div className="changelogs">
      <Skeleton rows={5} animated loading={loading}>
        {releases.map((release) => (
          <Card
            className="changelog-card"
            key={release.id}
            header={
              <div className="changelog-header">
                <div className="changelog-meta">
                  <p className="changelog-by">
                    <strong>{release.name}</strong>
                    <span className="changelog-date">
                      {new Date(release.published_at).toLocaleString()}
                    </span>
                  </p>
                </div>
                <div className="operators">
                  <a href={release.html_url} target="_blank" rel="noreferrer noopenner">
                    打开链接
                  </a>
                </div>
              </div>
            }
          >
            <div dangerouslySetInnerHTML={{ __html: md.render(release.body) }}></div>
          </Card>
        ))}
      </Skeleton>
    </div>
  );
};

export default Changelog;
