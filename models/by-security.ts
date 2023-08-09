import { EndorsementType } from './enum';
import Security from './security';

export default interface BySecurity {
  security: Security;
  endorsementType: EndorsementType;
  endorsement: string;
}
