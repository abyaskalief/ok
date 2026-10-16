import React, { useState } from 'react';
import { X, Calculator, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'atap',
}) => {
  const { companySettings } = useApp();
  const [category, setCategory] = useState<string>(defaultCategory);
  const [area, setArea] = useState<number>(100);
  const [materialType, setMaterialType] = useState<string>('standard');
  const [includeService, setIncludeService] = useState<boolean>(true);

  if (!isOpen) return null;

  // Calculation logic
  let baseRate = 0;
  let unitLabel = 'm²';

  if (category === 'atap') {
    // Baja ringan
    unitLabel = 'm² atap';
    if (materialType === 'standard') baseRate = 145000;
    else if (materialType === 'genteng_metal') baseRate = 220000;
    else baseRate = 295000; // genteng keramik heavy
  } else if (category === 'plafon') {
    unitLabel = 'm² plafon';
    if (materialType === 'standard') baseRate = 110000; // flat
    else if (materialType === 'drop_ceiling') baseRate = 145000;
    else baseRate = 185000; // akustik / moisture resistant
  } else if (category === 'kitchen') {
    unitLabel = 'meter lari';
    if (materialType === 'standard') baseRate = 2400000; // HPL Standard
    else if (materialType === 'quartz') baseRate = 3200000; // HPL + Quartz
    else baseRate = 4200000; // Cat Duco Luxury + Granite
  } else if (category === 'renovasi') {
    unitLabel = 'm² bangunan';
    if (materialType === 'standard') baseRate = 2200000; // Renovasi Ringan
    else if (materialType === 'sedang') baseRate = 3800000; // Renovasi Menengah
    else baseRate = 5500000; // Renovasi Total & Tingkat
  }

  const estimatedTotal = area * baseRate;

  const handleWhatsAppQuote = () => {
    const message = `Halo Mitra Konstruksi, saya ingin konsultasi estimasi biaya:\n- Kategori: ${category.toUpperCase()}\n- Volume: ${area} ${unitLabel}\n- Pilihan: ${materialType}\n- Perkiraan Biaya: Rp ${estimatedTotal.toLocaleString('id-ID')}\nMohon jadwal survei dan penawaran resminya.`;
    const cleanPhone = companySettings.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-600">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white">
                Kalkulator Estimasi Biaya
              </h3>
              <p className="text-xs text-slate-400">
                Hitung perkiraan kasar proyek Anda dalam hitungan detik
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-5">
          {/* Category Select Buttons (interactive segmented controls) */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Pilih Jenis Pekerjaan
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'atap', label: 'Baja Ringan' },
                { id: 'plafon', label: 'Plafon Gypsum' },
                { id: 'kitchen', label: 'Kitchen Set' },
                { id: 'renovasi', label: 'Renovasi' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setCategory(item.id);
                    if (item.id === 'kitchen') setArea(6);
                    else if (item.id === 'renovasi') setArea(70);
                    else setArea(100);
                  }}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all text-center ${
                    category === item.id
                      ? 'bg-blue-700 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Area Input */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Volume / Luasan ({unitLabel})
              </label>
              <span className="text-sm font-bold font-mono text-blue-700">
                {area} {unitLabel}
              </span>
            </div>
            <input
              type="range"
              min={category === 'kitchen' ? 2 : 15}
              max={category === 'kitchen' ? 25 : 500}
              step={category === 'kitchen' ? 1 : 5}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="w-full accent-blue-700 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>Min {category === 'kitchen' ? '2 m' : '15 m²'}</span>
              <span>Maks {category === 'kitchen' ? '25 m' : '500 m²'}</span>
            </div>
          </div>

          {/* Material Grade Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Spesifikasi Material & Finishing
            </label>
            <select
              value={materialType}
              onChange={(e) => setMaterialType(e.target.value)}
              className="w-full text-xs font-medium bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {category === 'atap' && (
                <>
                  <option value="standard">Rangka Baja Ringan C75.75 SNI saja (Rp 145.000/m²)</option>
                  <option value="genteng_metal">Rangka + Genteng Metal Pasir + Insulasi (Rp 220.000/m²)</option>
                  <option value="keramik">Rangka Heavy Duty + Genteng Keramik KIA/Kanmuri (Rp 295.000/m²)</option>
                </>
              )}
              {category === 'plafon' && (
                <>
                  <option value="standard">Plafon Gypsum Flat Hollow 0.35mm (Rp 110.000/m²)</option>
                  <option value="drop_ceiling">Plafon Drop Ceiling + Jalur LED Cove (Rp 145.000/m²)</option>
                  <option value="moisture">Gypsum Moisture Resistant (MR) / Akustik Perforated (Rp 185.000/m²)</option>
                </>
              )}
              {category === 'kitchen' && (
                <>
                  <option value="standard">Multiplek Meranti 18mm + HPL Standard + Rel Soft Close (Rp 2.400.000/m)</option>
                  <option value="quartz">Multiplek Meranti + HPL Premium + Quartz Top Table (Rp 3.200.000/m)</option>
                  <option value="luxury">Luxury Full Duco Semi-Gloss + Granit Nero Import (Rp 4.200.000/m)</option>
                </>
              )}
              {category === 'renovasi' && (
                <>
                  <option value="standard">Renovasi Kosmetik (Pengecatan, Perapian Lantai & Plafon) (Rp 2.200.000/m²)</option>
                  <option value="sedang">Renovasi Menengah (Bongkar Dinding, Fasad, Atap Baru) (Rp 3.800.000/m²)</option>
                  <option value="total">Renovasi Struktur Total / Penambahan Lantai Tingkat (Rp 5.500.000/m²)</option>
                </>
              )}
            </select>
          </div>

          {/* Result Box */}
          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200">
            <span className="text-xs font-semibold text-blue-900 block mb-1">
              Perkiraan Total Investasi:
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black font-mono text-blue-800">
                Rp {estimatedTotal.toLocaleString('id-ID')}
              </span>
              <span className="text-xs text-blue-600">estimasi</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              *Harga estimasi sudah mencakup material standar & jasa pemasangan. Penawaran akurat mengikat akan diterbitkan setelah survei lokasi (Gratis).
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleWhatsAppQuote}
              className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Kirim ke WhatsApp Konsultan</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
