import React, { useEffect, useState, useCallback } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = import.meta.env.DEV
        ? "http://localhost/backend/news.php"
        : "/backend/news.php";

      const response = await fetch(endpoint);
      if (!response.ok) throw new Error(`Failed to fetch news: ${response.status}`);

      const data = await response.json();
      if (data.results) {
        setNews(data.results);
      } else {
        setError("No news found.");
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Unable to load news. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <section id="announcements" className="section">
      <div className="section-container">
        <h2 className="section-title">Latest News</h2>
        <p className="section-description">Stay updated with the latest news and current events.</p>

        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading latest news...</p>
          </div>
        )}

        {error && !loading && (
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>
            <button className="cta-button primary" onClick={fetchNews}>Retry</button>
          </div>
        )}

        {!loading && !error && (
          <div className="news-carousel-container">
            <div className="news-carousel">
              {news.map((article, index) => (
                <div
                  key={article.id || `news-${index}-${article.title?.substring(0, 20)}`}
                  className="news-card"
                >
                  <div className="news-image">
                    <img
                      src={article.image_url || "/news-collage.png"}
                      alt={article.title}
                      onError={(e) => { e.target.src = "/news-collage.png"; }}
                    />
                  </div>
                  <div className="news-content">
                    <div className="news-source">{article.source_id || "Unknown Source"}</div>
                    <h3 className="news-title">{article.title}</h3>
                    <p className="news-description">{article.description || "No description available."}</p>
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="news-link">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
