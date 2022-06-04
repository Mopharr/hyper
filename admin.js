// NAVBAR FOR THE ADMIN PANEL
const tableBody = document.querySelector("#tableBody");
// const error = document.querySelector(".error");

const loadData = async () => {
  // processing.style.display = "flex";
  let url = "https://hyper-test.herokuapp.com/api/get_user";

  const response = await fetch(url);
  const res = await response.json();
  console.log("RESPONSE DATA", res);
  // processing.style.display = "none";
  if (res.success === true) {
    if (Array.isArray(res.data)) {
      let sn = 0;
      for (record of res.data) {
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
      const record = res.data;
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
    // error.innerHTML = "empty";
    // setTimeout((_) => (error.innerHTML = ""), 3000);
    console.log("an error occured");
  }
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
};

loadData();
