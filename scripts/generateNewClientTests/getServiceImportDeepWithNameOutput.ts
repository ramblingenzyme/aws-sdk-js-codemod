import { CLIENTS_TO_TEST } from "./config";
import { getClientNameWithLocalSuffix } from "./getClientNameWithLocalSuffix";
import { getV3ClientsNewExpressionCode } from "./getV3ClientsNewExpressionCode";
import { getV3PackageImportsCode } from "./getV3PackageImportsCode";

export const getServiceImportDeepWithNameOutput = (codegenComment: string) => {
  let content = `${codegenComment}\n`;

  content += getV3PackageImportsCode(CLIENTS_TO_TEST, { useLocalSuffix: true });
  content += `\n`;
  content += getV3ClientsNewExpressionCode(CLIENTS_TO_TEST.map(getClientNameWithLocalSuffix));

  return content;
};
