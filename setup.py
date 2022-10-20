from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in uitools/__init__.py
from uitools import __version__ as version

setup(
	name="uitools",
	version=version,
	description="App for set up of ui tool kit for vue and boostrap vue and forms",
	author="philip",
	author_email="philmaxsnr@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
