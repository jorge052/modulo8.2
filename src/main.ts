import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientePediatra = pacientes.filter(
    (pacientes) => pacientes.especialidad === "Pediatra"
  );

  return pacientePediatra;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

//b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientePediatra = pacientes.filter(
    (pacientes) => pacientes.especialidad === "Pediatra" && pacientes.edad < 10
  );
  return pacientePediatra;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados.

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  const activarProctolo = pacientes.some(
    (pacientes) =>
      pacientes.frecuenciaCardiaca > 100 && pacientes.temperatura > 39
  );
  return activarProctolo;
};

console.log(
  "Activar protocolo de urgencia",
  activarProtocoloUrgencia(pacientes)
);

//El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatra: Pacientes[] = pacientes.map(
    (pacientes: Pacientes) => {
      if (pacientes.especialidad === "Pediatra") {
        return { ...pacientes, especialidad: "Medico de familia" };
      } else {
        return pacientes;
      }
    }
  );
  return pacientesPediatra;
};

const pacientesReasignados = reasignaPacientesAMedicoFamilia(pacientes);

console.log(pacientesReasignados);

// Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría

const mandarPediatraACasa = (pacientes: Pacientes[]): boolean => {
  const pacientePediatra = pacientes.some(
    (pacientes) => pacientes.especialidad === "Pediatra"
  );
  return pacientePediatra;
};

console.log("El pediatra no se fue a casa", mandarPediatraACasa(pacientes));

// Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let medicoDeFamiliaNumero = 0;
  let pediatraNumero = 0;
  let cardiologiaNumero = 0;

  pacientes.reduce((_, pacientes) => {
    switch (pacientes.especialidad) {
      case "Medico de familia":
        medicoDeFamiliaNumero++;
        break;
      case "Pediatra":
        pediatraNumero++;
        break;
      case "Cardiólogo":
        cardiologiaNumero++;
        break;
    }

    return null;
  }, null);

  const resultados: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: medicoDeFamiliaNumero,
    pediatria: pediatraNumero,
    cardiologia: cardiologiaNumero,
  };

  return resultados;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
