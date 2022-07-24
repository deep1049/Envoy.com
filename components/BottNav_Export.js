let bottom_Nav=`<div>
<p>Products</p>
<ul>
  <li><a href="">Protect</a></li>
  <li><a href="">Desks</a></li>
  <li><a href="">Visitors</a></li>
  <li><a href="">Rooms</a></li>
  <li><a href="">Deliveries</a></li>
  <li><a href="">Mobile</a></li>
  <li><a href="">Integrations</a></li>
  <li><a href="">Partnerships</a></li>
  <li><a href="">Pricing</a></li>
  <li><a href="quote.html">Get a quote</a></li>
</ul>
</div>
<div>
<p>Solutions</p>
<ul>
  <li><a href="">Hybrid work</a></li>
  <li><a href="">Enterprise</a></li>
  <li><a href="">Security</a></li>
  <li><a href="">Space management</a></li>
  <li><a href="">Health and safety</a></li>
  <li><a href="">Workplace experience</a></li>
  <li><a href="">Compliance</a></li>
  <li><a href="">Touchless sign-in</a></li>
  <li><a href="">Access control</a></li>
  <li><a href="">Efficiency</a></li>
  <li><a href="">Experience</a></li>
</ul>
</div>
<div>
<p>Resources</p>
<ul>
  <li><a href="">Hybrid work resource hub</a></li>
  <li><a href="">Help center</a></li>
  <li><a href="">Return to Workplace Index</a></li>
  <li><a href="">Envoy Store</a></li>
  <li><a href="">Customer stories</a></li>
  <li><a href="Demo.html">Demo</a></li>
  <li><a href="">Compliance tips</a></li>
  <li><a href="">Developers</a></li>
  <li><a href="">Glossary</a></li>
</ul>
</div>
<div>
<p>Company</p>
<ul>
  <li><a href="">About Envoy</a></li>
  <li><a href="">Vision</a></li>
  <li><a href="">Jobs</a></li>
  <li><a href="">Blog</a></li>
  <li><a href="">Data security</a></li>
  <li><a href="">Press</a></li>
  <li><a href="">Partner</a></li>
</ul>
</div>`;

function append_bottom_Nav_HTML(container){
  container.innerHTML = bottom_Nav;
};

export {append_bottom_Nav_HTML};