const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlR1YW4iLCJlbWFpbCI6InR1YW4udm9AZHNxdWFyZS5jb20udm4ifQ.v_sWv1dvrwFN3Nh4dmhZCi63kf1N17MpIScDSYeGlXc',
      })
    }, 3000)
  })
}

export const AuthService = {
  login,
}
