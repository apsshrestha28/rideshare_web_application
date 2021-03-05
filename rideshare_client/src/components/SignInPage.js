import React from 'react';

const SignInPage = ({ handleSubmit, history}) => {

  function onSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    handleSubmit({
      email: formData.get('email'),
      password: formData.get('password')
    });
    history.push('/');
  }

  return(
    <main className='bgImg' id='sign-style'>
      <h4 className='sign-heading'>Sign In</h4>
      <form className='sign-form' onSubmit={onSubmit}>
        <div className='form-group row'>
          <label htmlFor='email' className='col-sm-2 col-form-label'>Email*</label>
          <input id='email' type='email' name='email' required='required' />
        </div>
        <div className= 'form-group row'>
          <label htmlFor='password' className='col-sm-2 col-form-label'>Password*</label>
          <input id='password' type='password' name='password' required='required' />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    </main>
  )
}

export default SignInPage;

