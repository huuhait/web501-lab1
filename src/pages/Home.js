import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = {
  content: `
  <div class="banner mt-2">
    <img class="text-center" src="./assets/img/banner.png" alt="">
  </div>

  <div class="content">
    <div class="content-block">
      <h2 class="content-block-title my-4 font-bold text-xl">TIN TỨC HỌC TẬP</h2>
      <div class="content-block-group flex justify-between">
        <div class="content-item">
          <div class="content-item-img">
            <img src="https://picsum.photos/id/237/250/170" alt="">
          </div>
          <h4 class="content-item-title"><a href="">Vinh danh 295 sinh viên FPT Polytechnic học kỳ Spring</a></h4>
          <p class="content-item-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
        </div>
        <div class="content-item">
          <div class="content-item-img">
            <img src="https://picsum.photos/id/238/250/170" alt="">
          </div>
          <h4 class="content-item-title"><a href="">Sinh viên khối ngành Kinh tế học cách "chạm" vào cảm xúc</a></h4>
          <p class="content-item-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
        </div>
        <div class="content-item">
          <div class="content-item-img">
            <img src="https://picsum.photos/id/239/250/170" alt="">
          </div>
          <h4 class="content-item-title"><a href="">Sinh viên FPoly trải nghiệm thực tế tại Mường Thanh</a></h4>
          <p class="content-item-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
        </div>
      </div>
    </div>

    <div class="content-block">
      <h2 id="js-link" class="content-block-title my-4 font-bold text-xl">HOẠT ĐỘNG SINH VIÊN</h2>
      <div class="content-block-group flex justify-between mb-4">
        <div class="content-item">
          <div class="content-item-img">
            <img src="https://picsum.photos/id/240/250/170" alt="">
          </div>
          <h4 class="content-item-title"><a href="">Vinh danh 295 sinh viên FPT Polytechnic học kỳ Spring</a></h4>
          <p class="content-item-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
        </div>
        <div class="content-item">
          <div class="content-item-img">
            <img src="https://picsum.photos/id/241/250/170" alt="">
          </div>
          <h4 class="content-item-title"><a href="">Sinh viên khối ngành Kinh tế học cách "chạm" vào cảm xúc</a></h4>
          <p class="content-item-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
        </div>
        <div class="content-item">
          <div class="content-item-img">
            <img src="https://picsum.photos/id/242/250/170" alt="">
          </div>
          <h4 class="content-item-title"><a href="">Sinh viên FPoly trải nghiệm thực tế tại Mường Thanh</a></h4>
          <p class="content-item-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
        </div>
      </div>
    </div>
  </div>
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

export default Home;