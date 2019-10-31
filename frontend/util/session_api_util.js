export const signup = (user) => (
  $.ajax({ 
    method: "POST", 
    url: "/api/users", 
    data: { user }, 
  })
)

export const login = (user) => (
  $.ajax({ 
    method: "POST", 
    url: "/api/session", 
    data: { user },
  })
)

export const logout = (id = 1) => (
  $.ajax({ 
    method: "DELETE", 
    url:  `/api/session/${id}`,  //What id to put here? 1?
  })
)