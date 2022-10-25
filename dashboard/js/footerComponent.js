const root = ReactDOM.createRoot(
  document.getElementById('footer')
);



const copyrightByWhom = "© Roy 2022 | All Rights Reserved"
const backToTop = "Back to Top ↑"



const theFooter = (
  <footer>
    <div className="copyright">
      <p>© Roy 2022 | All Rights Reserved </p>
    </div>
    <div className="copyright">
      <p>Back to Top ↑</p>
    </div>
  </footer>
)



root.render(theFooter);