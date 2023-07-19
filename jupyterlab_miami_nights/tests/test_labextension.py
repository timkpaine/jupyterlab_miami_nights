from jupyterlab_miami_nights import _jupyter_labextension_paths


class TestInit:
    def test__jupyter_labextension_paths(self):
        assert _jupyter_labextension_paths() == [
            {"dest": "@timkpaine/jupyterlab_miami_nights", "src": "labextension"}
        ]
