import React from 'react'

export default function SignIn(props) {
  return (
    <section class="content">
      <div class="container">
        <div class="login-container">
          <div class="panel">
            <div class="panel-heading">
              <strong>Halo, selamat datang!</strong>
            </div>
            <div class="panel-body">
              <form action="#">
                <div class="form-group">
                  <input type="text" class="full" placeholder="Email" />
                </div>
                <div class="form-group">
                  <input type="password" class="full" placeholder="Password" />
                </div>
                <div class="form-group">
                  <input type="submit" class="btn btn-action btn-primary" value="Log In" />
                </div>
                <div class="form-group">
                  <a href="#" class="help-text">Lupa Password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
