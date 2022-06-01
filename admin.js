// NAVBAR FOR THE ADMIN PANEL
const tableBody = document.querySelector("#tableBody");
const error = document.querySelector(".error");

const loadData = () => {
  processing.style.display = "flex";
  let url;

   if (userId) {
     url = `https://hyper-test.herokuapp.com/api/get_user/${userId}`;
   } else {
     url = `https://hyper-test.herokuapp.com/api/get_user`;
   }
  fetch(url)
    .then((resp) => {
      if (resp.ok) {
        console.log(resp.data);
        return resp.json();
      } else {
        return Promise.reject("Ooops!!!! Something went Wrong");
      }
    })
    .then((data) => {
      processing.style.display = "none";
      if (data.success === "true") {
        console.log(data.data);
        if (Array.isArray(data.data)) {
          let sn = 0;
          for (record of data.data) {
            sn++;
            const row = document.createElement("tr");
            row.innerHTML = `
                        <td> ${sn} </td>
                        <td> ${record.name} </td>
                        <td> ${record.age} </td>
                        <td> ${record.dob} </td>
                        <td> ${record.status} </td>
                    `;
            tableBody.append(row);
          }
        } else {
          const record = data.data;
          const row = `
                    <tr>
                    <td> ${1} </td>
                    <td> ${record.name} </td>
                    <td> ${record.age} </td>
                    <td> ${record.dob} </td>
                    <td> ${record.status} </td>
                        
                    </tr>
                `;
          tableBody.innerHTML = row;
        }
      } else {
        error.innerHTML = data.Message;
        setTimeout((_) => (error.innerHTML = ""), 3000);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

