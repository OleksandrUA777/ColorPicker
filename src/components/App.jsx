import { ColorPicker } from './ColorPicker/ColorPicker';
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3*' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91663' },
  { label: 'Endigo', color: '#3F5185' },
];
export const App = () => {
  return <ColorPicker options={colorPickerOptions} />;
};
