const Header = {
  render() {
    return `
    <div class="header">
      <div class="header-logo h-24 flex justify-center items-center bg-blue-900 text-white text-xl font-bold">
        FPT POLYTECHNIC
      </div>
      
      <div class="header-navs h-9 bg-amber-600 flex items-center justify-between px-4">
        <ul class="header-menu ">
          <li><a href="/">Trang chủ</a></li>
          <li><a href="/news">Tuyển sinh</a></li>
          <li><a href="">Chương trình đào tạo</a></li>
          <li><a href="">Góc sinh viên</a></li>
          <li><a href="">Tuyển dụng</a></li>
        </ul>

        <div class="header-search flex items-center">
          <input type="text" class="rounded-sm h-6 pl-2">
          <button class="btn text-white text-sm bg-blue-900 px-4 h-6 rounded-sm ml-2">TÌM KIẾM</button>
        </div>
      </div>
    </div>
    `;
  },
};

export default Header;