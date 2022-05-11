import React from 'react'
import { FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export const Admin = () => {

  let navigate = useNavigate();

  const logout = () =>{
    localStorage.setItem('login', false);
    navigate("/login");
  }

  return (
    <div>
        <div className="d-flex">

        <aside className="flex-shrink-1 bg-primary">
            <p className="d-flex flex-column align-items-center my-2">
                <div>
                    <i className="fa-solid fa-square fa-lg fa-white"></i>
                </div>
                <p></p>
            </p>
            
            <p className="d-flex flex-column align-items-center my-2">
                <div>
                    <FiSettings style={{color: 'white'}}/>
                </div>
                <p className="fw-bold fs-6 text-white">Dashboard</p>
            </p>

            <p  className="d-flex flex-column align-items-center my-2">
                <div>
                    <FiSettings style={{color: 'white'}}/>
                </div>
                <p className="fw-bold text-white">Cars</p>
            </p>

        </aside>

        <div className="w-100">
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div class="container-fluid">
            <div class="navbar-brand" >
                Admin
                <i class="fa-solid fa-align-justify"></i>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">=</span>
            </button>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                <form class="d-flex me-4">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

                <div className="d-flex justify-content-center align-items-center">
                <div className="mx-3">Feri</div>
                <div onClick={logout} class="badge bg-danger">Logout</div>

                </div>
                

            </div>
            </div>
        </nav>
            <main className="d-flex">
                <div className="bg-white sidebar-inner px-3">
                    <p className="text-muted my-3 text-uppercase">Admin</p>
                    <p className="fw-bold my-1">Admin</p>
                </div>
                <div className="w-100 container p-5 bg-light">
                    <div aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item fw-bold">Dashboard</li>
                            <li class="breadcrumb-item">Dashboard</li>
                        </ol>
                    </div>

                    <div class="my-4">
                        <h6 class="text-label">List User</h6>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    

                </div>
            </main>

        </div>

        </div>

    </div>
  )
}
