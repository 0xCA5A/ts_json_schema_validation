{ pkgs }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_21
  ];
}
