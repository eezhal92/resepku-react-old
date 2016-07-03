import React from 'react'
import { IndexLink, Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <header>
        <div class="container">
          <div class="top">
            <h1 class="site-title">Mangande</h1>
            <input type="text" class="search" placeholder="Cari..." />
          </div>
          <div class="secondary-nav">
            <nav>
              <ul class="left-nav">
                <li><IndexLink activeClassName="active" to="/">Beranda</IndexLink></li>
                <li><Link activeClassName="active" to="/about">Tentang</Link></li>
                <li><a href="#">Kue Kering</a></li>
                <li><a href="#">Kue Basah</a></li>
                <li><a href="#">Jajanan</a></li>
              </ul>
              <ul class="right-nav">
                <li><Link to="/sign-up"><b>Daftar</b></Link></li>
                <li><Link to="/sign-in">Masuk</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
})
