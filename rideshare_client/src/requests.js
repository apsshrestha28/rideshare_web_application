const BASE_URL = `http://localhost:3000/api/v1`;

export const User = {
  index() {
    return fetch(`${BASE_URL}/users`,{
      headers:{
        'Cache-Control':'no-cache'
      }})
      .then(res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/users` , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    })
    .then(res => 
      res.json()
    );
  },
  show(id){
    return fetch(`${BASE_URL}/users/${id}`)
      .then(res => res.json());
  },
  update(id,params){
    return fetch(`${BASE_URL}/users/${id}`,{
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
 
}

export const Customer = {
  index() {
    return fetch(`${BASE_URL}/customers`,{
      headers: {
        'Cache-Control': 'no-cache'
      }}).then (res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/customers`,{
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  show(id){
    return fetch(`${BASE_URL}/customers/${id}`)
      .then(res => res.json());
  },
  update(id, params) {
    return fetch(`${BASE_URL}/customers/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json)
  }
}

export const Review = {
  show(params) {
    return fetch(`${BASE_URL}/users/${params.id}/reviews`,{
      headers:{
        'Cache-Control':'no-cache'
      }})
      .then(res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/users/${params.user_id}/reviews`,{
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
}

export const RideRequest= {
  index(){
    return fetch(`${BASE_URL}/ride_requests`, {
      headers: {
        'Cache-Control': 'no-cache'
      }}).then (res => res.json());  
  },
  show(params) {
    return fetch(`${BASE_URL}/users/${params.id}/ride_requests`,{
      headers:{
        'Cache-Control':'no-cache'
      }})
      .then(res => res.json());
  },
  create(params) {
    return fetch(`${BASE_URL}/users/${params.user_id}/ride_requests`,{
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  update(params) {
    return fetch(`${BASE_URL}/ride_requests/${params.id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json)
  }
}

export const Session = {
  create(params) {
   return fetch(`${BASE_URL}/sessions`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(
      res => res.json()
    );
  },
  destroy() {
    return fetch(`${BASE_URL}/sign_out`, {
      method: 'DELETE',
      credentials: 'include'
    }).then(res => res.json());
  },
  currentUser() {
    return fetch(`${BASE_URL}/current_user`, {
      credentials: 'include'
    }).then(res => res.json());
  }
}








