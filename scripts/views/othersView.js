class othersView {
  _paginationSection = document.querySelector(".movie-pagination");
  _sidebarButtons = document.querySelector(".sidebar-buttons");
  _toolTips = document.querySelectorAll(".secondary-title");

  _headerSection = document.querySelector(".section-header");
  _mainMovieSection = document.querySelector(".movie-main");

  _sidebar = document.querySelector(".movie-sidebar-nav");
  _overlay = document.querySelector(".overlay-main");
  _parent = document.body;

  // prettier-ignore
  constructor(){
    this._overlay.addEventListener('click', this._addOverlayEventHandler.bind(this))
  }

  _addOverlayEventHandler() {
    this.expandSidebar("remove");
    this.showOverlay("remove");
    this.shrinkSections("remove");
  }

  hideToolTip(type) {
    this._toolTips.forEach((el) => (el.style.visibility = type));
  }

  sidebarPointerEvent(type) {
    this._sidebar.style.pointerEvents = type;
  }

  sidebarBtnPointerEvent(type) {
    this._sidebarButtons.style.pointerEvents = type;
  }

  expandSidebar(type) {
    this._sidebar.classList[type]("active");
  }

  showOverlay(type) {
    this._overlay.classList[type]("show");
  }

  shrinkSections(type) {
    this._mainMovieSection.classList[type]("shrink");
    this._headerSection.classList[type]("shrink");
    this._paginationSection.classList[type]("shrink");
  }
}

export default new othersView();