import React, { useState, useRef } from 'react';

import Select from './components/Select';
import Input from './components/Input';
import Button from './components/Button';

import './css/App.css';

const courses = require('./database/courses.json');
const states = require('./database/states.json');
const cities = require('./database/cities.json');

const App = () => {
  const [coursesOptions, setCoursesOption] = useState(courses);
  const [statesOptions, setStatesOption] = useState(states);
  const [citiesOptions, setCitiesOption] = useState([]);

  const handleStateChange = (e) => {
    setCitiesOption(cities.filter((city) => city.state == e.target.value));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Cadastro realizado com sucesso!');
  };

  return (
    <>
      <div className="container">
        <h2>Cadastro de Ingressantes</h2>
        <Input inputType="text">Nome</Input>
        <Select options={coursesOptions}>Curso</Select>
        <Select options={statesOptions} handleSelect={handleStateChange}>
          Estado
        </Select>
        <Select options={citiesOptions}>Cidade</Select>
        <div>
          <form className="buttons-container">
            <Button className="btn btn-yellow btn-sm">Voltar</Button>
            <Button
              type="submit"
              className="btn btn-green btn-lg"
              onClick={handleFormSubmit}
            >
              Gravar
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
