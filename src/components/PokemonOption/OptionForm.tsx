import { useState } from 'react';
import { useNavigate } from 'react-router';

interface OptionFormProps {
  generation: string;
  round: string;
}

interface SelectOption {
  title: string;
  value: string;
}

const initialForm: OptionFormProps = { generation: '', round: '' };

const selectGeneration: SelectOption[] = [
  { title: 'Generacion I', value: '1' },
  { title: 'Generacion II', value: '2' },
  { title: 'Generacion III', value: '3' },
  { title: 'Generacion IV', value: '4' },
  { title: 'Generacion V', value: '5' },
  { title: 'Generacion VI', value: '6' },
  { title: 'Generacion VII', value: '7' },
  { title: 'Generacion VIII', value: '8' },
  { title: 'Generacion IX', value: '9' },
];

const selectRound: SelectOption[] = [
  { title: '5 Rondas', value: '5' },
  { title: '10 Rondas', value: '10' },
  { title: '15 Rondas', value: '15' },
  { title: '20 Rondas', value: '20' },
  { title: '25 Rondas', value: '25' },
  { title: '30 Rondas', value: '30' },
  { title: '40 Rondas', value: '40' },
  { title: '50 Rondas', value: '50' },
  { title: 'Infinitas Rondas', value: '1' },
];

const OptionForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<OptionFormProps>(initialForm);
  const [touched, setTouched] = useState<{ generation: boolean; round: boolean }>({
    generation: false,
    round: false,
  });
  const { generation, round } = form;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!generation || !round) {
      setTouched({ generation: true, round: true });
      return;
    }
    sessionStorage.setItem('Round', round);
    setForm(initialForm);
    navigate(`loading-detail/${generation}/${round}`);
  };

  return (
    <div className="card p-4 shadow-lg border-0 bg-secondary-page">
      <h3 className="text-white mb-4 text-center">
        <i className="bi bi-joystick me-2 text-accent"></i>
        Selecciona Generación y Rondas
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label text-white fw-semibold">
            <i className="bi bi-calendar-range me-1 text-accent"></i>
            Generación
          </label>
          <select
            name="generation"
            className={`form-select ${touched.generation && !generation ? 'is-invalid' : ''}`}
            value={generation}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Selecciona una generación</option>
            {selectGeneration.map(({ title, value }) => (
              <option key={value} value={value}>
                {title}
              </option>
            ))}
          </select>
          {touched.generation && !generation && (
            <div className="invalid-feedback text-warning">Debes seleccionar una generación.</div>
          )}
        </div>

        <div className="mb-4">
          <label className="form-label text-white fw-semibold">
            <i className="bi bi-shuffle me-1 text-accent"></i>
            Rondas
          </label>
          <select
            name="round"
            className={`form-select ${touched.round && !round ? 'is-invalid' : ''}`}
            value={round}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Selecciona las rondas</option>
            {selectRound.map(({ title, value }) => (
              <option key={value} value={value}>
                {title}
              </option>
            ))}
          </select>
          {touched.round && !round && (
            <div className="invalid-feedback text-warning">
              Debes seleccionar la cantidad de rondas.
            </div>
          )}
        </div>

        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary-page btn-lg px-5 fw-bold d-flex align-items-center gap-2"
            disabled={!generation || !round}
          >
            <i className="bi bi-play-circle-fill"></i> Iniciar Juego
          </button>
        </div>
      </form>
    </div>
  );
};

export default OptionForm;
