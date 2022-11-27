import { InfoFiscaisGlobal } from './components/InfoFiscaisGlobal';
import { RefFiscal } from './components/RefFiscal';
import { InfoRefGeneral } from './styles';

export function ImpostoGlobal() {
  return (
    <InfoRefGeneral>
      <div style={{ width: "18%" , marginLeft:"15px" }}>
        <RefFiscal/>
      </div>

      <div style={{ width: "78%"}}>
        <InfoFiscaisGlobal />
      </div>
    </InfoRefGeneral>
  );
}
