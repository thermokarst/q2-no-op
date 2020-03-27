#!/usr/bin/env bash


case `uname` in
    Linux)
	    CONDA_URL="https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"
	    ;;
    Darwin)
	    CONDA_URL="https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh"
	    ;;
    *)
	    echo "Unknown uname '`uname`'" >&2
	    exit 1
esac

wget -O miniconda.sh $CONDA_URL
chmod +x miniconda.sh
./miniconda.sh -b -p /opt/miniconda

conda init
conda info
echo "done"