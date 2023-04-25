
function User () {
  const data = {
    user: 'Maria',
    age: 69
  }
    return (
      <div>
        <h1>{data.user}</h1>
        <p>{data.age}</p>
      </div>
    )
}

export default User