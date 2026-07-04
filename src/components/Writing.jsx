import { ArrowUpRight } from 'lucide-react';
import { articles, profile } from '../data/content';
import { useReveal } from '../hooks/useReveal';
import SectionHeading from './SectionHeading';

function ArticleRow({ article, index }) {
  const [ref, visible] = useReveal();

  return (
    <a
      ref={ref}
      data-visible={visible}
      href={article.url}
      target="_blank"
      rel="noreferrer"
      className="article-row reveal"
      style={{ '--reveal-delay': `${index * 70}ms` }}
    >
      <span className="article-row__index">{String(index + 1).padStart(2, '0')}</span>

      <div className="article-row__body">
        <h3 className="article-row__title">{article.title}</h3>
        <p className="article-row__excerpt">{article.excerpt}</p>
      </div>

      <div className="article-row__meta">
        <span className="tag article-row__tag">{article.tag}</span>
        <span className="article-row__date">{article.date}</span>
        <span className="article-row__date">{article.readTime}</span>
      </div>

      <span className="article-row__arrow" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </a>
  );
}

export default function Writing() {
  return (
    <section id="writing" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="06 · writing"
          title="I write when a system teaches me something."
          sub="Notes from Medium — on AI, observability, and the architecture calls that actually move the needle."
        />

        <div className="article-list">
          {articles.map((a, i) => (
            <ArticleRow article={a} index={i} key={a.id} />
          ))}
        </div>

        <a className="article-list__cta" href={profile.medium} target="_blank" rel="noreferrer">
          Read more on Medium <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
