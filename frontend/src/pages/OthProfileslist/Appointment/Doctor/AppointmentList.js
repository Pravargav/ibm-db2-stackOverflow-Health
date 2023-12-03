import React from "react";
import Table from "react-bootstrap/Table";
import ToggleButton from "react-bootstrap/ToggleButton";
import  { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Appcontext } from "../../App";

function ByDoctorid() {
  const [mydappts, setMydappts] = useState([]);
  const { doctorId} = useContext(Appcontext);

  useEffect(() => {
    const fn = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/Appointments/d/${doctorId}`
        );

        setMydappts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fn();
  }, [doctorId]);
  return (
    <>
      <h1
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          textDecoration: "Underline",
        }}
      >
        Appointments List
      </h1>
      <Table
        striped
        bordered
        hover
        variant="secondary"
        style={{ margin: "10px" }}
      >
        <tbody>
          <tr>
            <td>pId:{"onvsfsdipsdnvonsdirfovnriw"}</td>
            <td>day:{"sifhoivjoisdfiofeonnoenoife"}</td>
            <td>week:{"wofnvfsdiodsnsnvidssd"}</td>
            <td>slot:{"osdvndsovodsphvosdnvvnvolll"}</td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Cancel
              </ToggleButton>
            </td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Resheduleee
              </ToggleButton>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table
        striped
        bordered
        hover
        variant="secondary"
        style={{ margin: "10px" }}
      >
        <tbody>
          <tr>
            <td>pId:{"onvsfsdipsdnvonsdirfovnriw"}</td>
            <td>day:{"sifhoivjoisdfiofeonnoenoife"}</td>
            <td>week:{"wofnvfsdiodsnsnvidssd"}</td>
            <td>slot:{"osdvndsovodsphvosdnvvnvolll"}</td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Cancel
              </ToggleButton>
            </td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Resheduleee
              </ToggleButton>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table
        striped
        bordered
        hover
        variant="secondary"
        style={{ margin: "10px" }}
      >
        <tbody>
          <tr>
            <td>pId:{"onvsfsdipsdnvonsdirfovnriw"}</td>
            <td>day:{"sifhoivjoisdfiofeonnoenoife"}</td>
            <td>week:{"wofnvfsdiodsnsnvidssd"}</td>
            <td>slot:{"osdvndsovodsphvosdnvvnvolll"}</td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Cancel
              </ToggleButton>
            </td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Resheduleee
              </ToggleButton>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table
        striped
        bordered
        hover
        variant="secondary"
        style={{ margin: "10px" }}
      >
        <tbody>
          <tr>
            <td>pId:{"onvsfsdipsdnvonsdirfovnriw"}</td>
            <td>day:{"sifhoivjoisdfiofeonnoenoife"}</td>
            <td>week:{"wofnvfsdiodsnsnvidssd"}</td>
            <td>slot:{"osdvndsovodsphvosdnvvnvolll"}</td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Cancel
              </ToggleButton>
            </td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Resheduleee
              </ToggleButton>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table
        striped
        bordered
        hover
        variant="secondary"
        style={{ margin: "10px" }}
      >
        <tbody>
          <tr>
            <td>pId:{"onvsfsdipsdnvonsdirfovnriw"}</td>
            <td>day:{"sifhoivjoisdfiofeonnoenoife"}</td>
            <td>week:{"wofnvfsdiodsnsnvidssd"}</td>
            <td>slot:{"osdvndsovodsphvosdnvvnvolll"}</td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Cancel
              </ToggleButton>
            </td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Resheduleee
              </ToggleButton>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table
        striped
        bordered
        hover
        variant="secondary"
        style={{ margin: "10px" }}
      >
        <tbody>
          <tr>
            <td>pId:{"onvsfsdipsdnvonsdirfovnriw"}</td>
            <td>day:{"sifhoivjoisdfiofeonnoenoife"}</td>
            <td>week:{"wofnvfsdiodsnsnvidssd"}</td>
            <td>slot:{"osdvndsovodsphvosdnvvnvolll"}</td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Cancel
              </ToggleButton>
            </td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Resheduleee
              </ToggleButton>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table
        striped
        bordered
        hover
        variant="secondary"
        style={{ margin: "10px" }}
      >
        <tbody>
          <tr>
            <td>pId:{"onvsfsdipsdnvonsdirfovnriw"}</td>
            <td>day:{"sifhoivjoisdfiofeonnoenoife"}</td>
            <td>week:{"wofnvfsdiodsnsnvidssd"}</td>
            <td>slot:{"osdvndsovodsphvosdnvvnvolll"}</td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Cancel
              </ToggleButton>
            </td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Resheduleee
              </ToggleButton>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table
        striped
        bordered
        hover
        variant="secondary"
        style={{ margin: "10px" }}
      >
        <tbody>
          <tr>
            <td>pId:{"onvsfsdipsdnvonsdirfovnriw"}</td>
            <td>day:{"sifhoivjoisdfiofeonnoenoife"}</td>
            <td>week:{"wofnvfsdiodsnsnvidssd"}</td>
            <td>slot:{"osdvndsovodsphvosdnvvnvolll"}</td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Cancel
              </ToggleButton>
            </td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Resheduleee
              </ToggleButton>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table
        striped
        bordered
        hover
        variant="secondary"
        style={{ margin: "10px" }}
      >
        <tbody>
          <tr>
            <td>pId:{"onvsfsdipsdnvonsdirfovnriw"}</td>
            <td>day:{"sifhoivjoisdfiofeonnoenoife"}</td>
            <td>week:{"wofnvfsdiodsnsnvidssd"}</td>
            <td>slot:{"osdvndsovodsphvosdnvvnvolll"}</td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Cancel
              </ToggleButton>
            </td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Resheduleee
              </ToggleButton>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table
        striped
        bordered
        hover
        variant="secondary"
        style={{ margin: "10px" }}
      >
        <tbody>
          <tr>
            <td>pId:{"onvsfsdipsdnvonsdirfovnriw"}</td>
            <td>day:{"sifhoivjoisdfiofeonnoenoife"}</td>
            <td>week:{"wofnvfsdiodsnsnvidssd"}</td>
            <td>slot:{"osdvndsovodsphvosdnvvnvolll"}</td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Cancel
              </ToggleButton>
            </td>
            <td>
              <ToggleButton id="tbg-radio-1" variant="secondary" value={1}>
                Resheduleee
              </ToggleButton>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ByDoctorid;
