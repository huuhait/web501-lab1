import Header from "../components/Header";
import Footer from "../components/Footer";

const News = {
  content: `
    <h1>News</h1>
  `,
  render() {
    return `
    <div class="container mx-auto">
      ${Header.render()}
      ${this.content}
      ${Footer.render()}
    </div>
    `;
  },
};

export default News;